(function (window) {
  if (!window.app) {
    window.app = {};
  }

  class RangeSlider {
    constructor(root) {
      this.root = root;

      this.slider = this.root.querySelector('.range-slider__slider');
      this.inputs = this.root.querySelectorAll('.input__input');

      this.init();
    }

    init = () => {
      if (!this.slider) return;

      const params = JSON.parse(this.root?.dataset?.params);
      const handles = params.handlesNum || 1;

      const sliderOptions = {
        start:
          handles === 1
            ? [params?.start ?? 0]
            : [params?.start ?? 0, params?.end ?? 100],
        connect: handles === 1 ? 'lower' : true,
        range: {
          min: params?.range?.min ?? 0,
          max: params?.range?.max ?? 100,
        },
        tooltips: [
          false,
          {
            to: (value) =>
              `${Math.round(value)}${params.valueSymbol ? ` ${params.valueSymbol}` : ''}`,
          },
        ].slice(handles === 1 ? 1 : 0),
      };

      window.noUiSlider.create(this.slider, sliderOptions);

      if (params.hasInputs) this.handleInputsValues(params.valueSymbol);
    };

    handleInputsValues = (valueSymbol) => {
      if (!this.inputs) return;

      this.slider.noUiSlider.on('update', (values, handle) => {
        const input = this.inputs[handle];

        input.value = `${Math.round(values[handle])}${valueSymbol ? ` ${valueSymbol}` : ''}`;
        input.size = input.value.length;
      });

      this.inputs.forEach((input, i) => {
        if (i === this.inputs.length - 1) {
          input.setAttribute('disabled', '');
        }

        input.addEventListener('keydown', (e) => this.onInputKeyDown(e, i));
      });
    };

    onInputKeyDown = (e, handle) => {
      this.handleInputSize(e);

      if (e.key !== 'Enter') return;

      this.slider.noUiSlider.setHandle(
        handle,
        e.target.value.replace(/[^\d]/gi, '')
      );
    };

    handleInputSize = (e) => {
      const input = e.target;
      if (!input || input.value.length === 0) return;

      input.size = input.value.length + 1;
    };

    destroy = () => {
      this.inputs.forEach((input, i) => {
        input.removeEventListener('keydown', (e) => this.onInputKeyDown(e, i));
      });
    };
  }

  window.app.rangeSlider = {
    init: () => {
      document.querySelectorAll('.range-slider').forEach((slider) => {
        new RangeSlider(slider);
      });
    },
  };

  window.app.rangeSlider.init();
})(window);
