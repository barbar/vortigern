
export default function(tag, data) {
    if (process.env.NODE_ENV === 'development') {
      /* tslint:disable */
      console.log(tag, data);
      /* tslint:enable */
    }
  }
