const AutoSave = {

  save: (item, value) => {
    localStorage.setItem(item, value);
  },

  restore: (parent, item) => {
    const value = localStorage.getItem(item);
    if (value) {
      parent.setState({ [item]: value });
    }
  },

  clear: (item) => {
    localStorage.removeItem(item);
  }
};

export default AutoSave;
