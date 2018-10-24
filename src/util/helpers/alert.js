const alert = {
  error: (message) => {
    toastr.options.closeButton = true;
    toastr.options.timeOut = 7200;
    toastr.error(message);
  },
  success: (message) => {
    toastr.options.closeButton = true;
    toastr.options.timeOut = 7200;
    toastr.success(message);
  }
};
export default alert;
