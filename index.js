import { NativeModules } from 'react-native';

const RCTToast = NativeModules.Toast;
const Toast = {};

const optionsBuilder = function () {
  // defaults
  let message = null;
  let duration = 'short';
  let position = 'center';
  let addPixelsY = 0;

  return {
    withMessage(m) {
      message = m;
      return this;
    },
    withDuration(d) {
      duration = d;
      return this;
    },
    withPosition(p) {
      position = p;
      return this;
    },
    withAddPixelsY(y) {
      addPixelsY = y;
      return this;
    },
    build: () => ({
      message,
      duration,
      position,
      addPixelsY
    }),
  };
};

const showWithOptions = options => RCTToast.show(options);

const showToast = (message, duration, position) => {
  showWithOptions(
      optionsBuilder()
        .withMessage(message || 'unknown message')
        .withDuration(duration)
        .withPosition(position)
        .build()
  );
};

Toast.showShortTop = message => showToast(message, 'short', 'top');
Toast.showShortCenter = message => showToast(message, 'short', 'center');
Toast.showShortBottom = message => showToast(message, 'short', 'bottom');
Toast.showLongTop = message => showToast(message, 'long', 'top');
Toast.showLongCenter = message => showToast(message, 'long', 'center');
Toast.showLongBottom = message => showToast(message, 'long', 'bottom');

Toast.show = function (message) {
  showToast(message, 'short', 'bottom');
};

Toast.hide = function () {
  RCTToast.hide();
};

module.exports = Toast;
