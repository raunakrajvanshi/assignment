import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const Images = {
  blankFav: resolveAssetSource(require('../Assets/icons/black-fav.png')),
  fillFav: resolveAssetSource(require('../Assets/icons/fill-fav.png')),
  search: resolveAssetSource(require('../Assets/icons/search.png')),
};
export default Images;
