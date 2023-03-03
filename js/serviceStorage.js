export const getStorage = () => (localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []);

export const setStorage = (data) => localStorage.setItem('data', JSON.stringify(data));

export const removeStorage = (id) => {
  const data = getStorage('data');
  const newData = data.filter(item => item.id !== id);
  setStorage(newData);
};
