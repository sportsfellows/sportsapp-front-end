export const log = (...args) => __DEBUG__ ? console.log(...args) : undefined;
export const logError = (...args) => __DEBUG__ ? console.error(...args) : undefined;
export const renderIf = (test, component) => test ? component : undefined;
export const classToggler = (options) => Object.keys(options).filter(key => !!options[key]).join(' ');

export const userValidation = props => {
  if(!props.userAuth) {
    let { history } = props;
    let token;
    
    process.env.NODE_ENV === 'production' ? token = readCookie('Bracket-Busters-Token') : token = localStorage.token;  
    if(token) {
      props.tokenSignIn(token)
        .then(() => props.userProfileFetch())
        .then(profile => {
          if(profile.body.leagues.length) props.leaguesFetch(profile.body.leagues);
          return profile;
        })
        .then(profile => {
          return props.groupsFetch(profile.body.groups);
        })
        .catch( () => {
          logError;
          if(props.location.pathname !== '/') return history.replace('/');
        });
    } else {
      if(props.location.pathname !== '/') return history.replace('/');
    }
  }
  return;
};

export const privacyCheck = props => {

};

export const checkAndAdd = (payload, state) => {
  var found = state.some(function (el) {
    return el._id === payload._id;
  });
  if (!found) state.push(payload);
  return state;
};

export const photoToDataURL = file => {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();

    reader.addEventListener('load', () => {
      resolve(reader.result);
    });

    reader.addEventListener('error', () => {
      reject(reader.error);
    });

    if (file) return reader.readAsDataURL(file);
    return reject(new Error('File Require'));
  });
};

// from https://stackoverflow.com/questions/14573223/set-cookie-and-get-cookie-with-javascript
export const readCookie = name => {
  var nameDisplay = name + '=';
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var cookie = ca[i];
    while (cookie.charAt(0)==' ') cookie = cookie.substring(1,cookie.length);
    if (cookie.indexOf(nameDisplay) == 0) return cookie.substring(nameDisplay.length,cookie.length);
  }
  return null;
};

export const createCookie = (name,value,days) => {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = '; expires='+date.toGMTString();
  } else { 
    expires = '';
    document.cookie = name+'='+value+expires+'; path=/';
  }
};

export const deleteCookie  = (name) => {
  return createCookie(name,'',-1);
};