const ZPay = {
  // Configuration
  config: {
    serverBase: 'http://localhost:3000',
    defaultAmount: 10.00,
    defaultCurrency: 'usd',
    defaultDescription: 'Test Payment'
  },

  // Load external scripts
  loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        return resolve();
      }
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  },

  // Initialize configuration
  //TODO accept the api and secret here and validate them
  init(config = {}) {
    this.config = { ...this.config, ...config };
  },

  // Create Stripe payment
  async createStripePayment(options = {}) {
    const { amount = this.config.defaultAmount, currency = this.config.defaultCurrency, description = this.config.defaultDescription } = options;
    
    try {
      const response = await fetch(`${this.config.serverBase}/api/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          provider: 'stripe',
          amount,
          currency,
          description
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create Stripe payment session');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Stripe payment creation error:', error);
      throw error;
    }
  },

  // Create Razorpay payment
  async createRazorpayPayment(options = {}) {
    const { amount = this.config.defaultAmount, currency = this.config.defaultCurrency, description = this.config.defaultDescription } = options;
    
    try {
      const response = await fetch(`${this.config.serverBase}/api/checkout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          provider: 'razorpay',
          amount,
          currency,
          description
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create Razorpay payment session');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Razorpay payment creation error:', error);
      throw error;
    }
  },

  // Process Stripe payment (redirect to checkout)
  async processStripePayment(options = {}) {
    try {
      const data = await this.createStripePayment(options);
      // Only redirect if not in a form context
      if (options.redirect !== false) {
        window.location.href = data.checkoutUrl;
      }
      return data;
    } catch (error) {
      console.error('Stripe payment processing error:', error);
      throw error;
    }
  },

  // Process Razorpay payment (open modal)
  async processRazorpayPayment(options = {}) {
    try {
      const data = await this.createRazorpayPayment(options);
      
      await this.loadScript('https://checkout.razorpay.com/v1/checkout.js');
      
      const rzpOptions = {
        key: data.key,
        amount: data.amount,
        currency: data.currency,
        name: 'ZPay Demo',
        description: options.description || this.config.defaultDescription,
        order_id: data.id,
        handler: function (response) {
          console.log('Razorpay payment successful:', response.razorpay_payment_id);
          // Only redirect if not in a form context
          if (options.redirect !== false) {
            window.location.href = `${ZPay.config.serverBase}/success.html`;
          }
        },
        prefill: {
          name: 'Test User',
          email: 'test@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#F37254'
        }
      };
      
      const rzp = new Razorpay(rzpOptions);
      rzp.open();
    } catch (error) {
      console.error('Razorpay payment processing error:', error);
      throw error;
    }
  },

  // Initialize payment (main method)
  async initPayment(options) {
    const { provider, amount, currency, description } = options;
    
    try {
      if (provider === 'stripe') {
        await this.processStripePayment({ amount, currency, description });
      } else if (provider === 'razorpay') {
        await this.processRazorpayPayment({ amount, currency, description });
      } else {
        throw new Error('Unsupported payment provider');
      }
    } catch (error) {
      console.error('Payment initialization error:', error);
      throw error;
    }
  },

  // Quick payment methods for easy use
  async payWithStripe(amount = this.config.defaultAmount, currency = this.config.defaultCurrency, description = this.config.defaultDescription) {
    return this.processStripePayment({ amount, currency, description });
  },

  async payWithRazorpay(amount = this.config.defaultAmount, currency = this.config.defaultCurrency, description = this.config.defaultDescription) {
    return this.processRazorpayPayment({ amount, currency, description });
  },

  // Form-based payment methods (for HTML forms)
  async processFormPayment(formData) {
    const { provider, amount, currency, description } = formData;
    
    if (!provider) {
      throw new Error('Payment provider is required');
    }

    return this.initPayment({
      provider,
      amount: amount || this.config.defaultAmount,
      currency: currency || this.config.defaultCurrency,
      description: description || this.config.defaultDescription
    });
  },

  // Get payment form data from HTML form
  getFormData(formElement) {
    const formData = new FormData(formElement);
    return {
      provider: formData.get('provider') || formElement.querySelector('[name="provider"]')?.value,
      amount: parseFloat(formData.get('amount')) || parseFloat(formElement.querySelector('[name="amount"]')?.value),
      currency: formData.get('currency') || formElement.querySelector('[name="currency"]')?.value,
      description: formData.get('description') || formElement.querySelector('[name="description"]')?.value
    };
  },

  // Attach payment handler to form
  attachFormHandler(formElement, options = {}) {
    const { onSuccess, onError, onStart } = options;
    
    formElement.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      try {
        if (onStart) onStart();
        
        const formData = this.getFormData(formElement);
        // Disable redirects for form submissions
        formData.redirect = false;
        await this.processFormPayment(formData);
        
        if (onSuccess) onSuccess(formData);
      } catch (error) {
        console.error('Form payment error:', error);
        if (onError) onError(error);
      }
    });
  },

  // Create payment button handler
  createPaymentButton(buttonElement, options = {}) {
    const { provider, amount, currency, description, onSuccess, onError, onStart, redirect = true } = options;
    
    buttonElement.addEventListener('click', async (e) => {
      e.preventDefault();
      
      try {
        if (onStart) onStart();
        
        await this.initPayment({
          provider: provider || 'stripe',
          amount: amount || this.config.defaultAmount,
          currency: currency || this.config.defaultCurrency,
          description: description || this.config.defaultDescription,
          redirect: redirect
        });
        
        if (onSuccess) onSuccess();
      } catch (error) {
        console.error('Payment button error:', error);
        if (onError) onError(error);
      }
    });
  },

  // Utility methods
  formatAmount(amount, currency = 'usd') {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase()
    }).format(amount);
  },

  validatePaymentData(data) {
    const { provider, amount } = data;
    
    if (!provider || !['stripe', 'razorpay'].includes(provider)) {
      throw new Error('Invalid payment provider');
    }
    
    if (!amount || amount <= 0) {
      throw new Error('Invalid payment amount');
    }
    
    return true;
  }
};

window.ZPay = ZPay;
