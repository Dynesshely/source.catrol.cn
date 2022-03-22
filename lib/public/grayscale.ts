(() => {
    const PSFarr = [
      '0321',
      '0322',
      '0403',
      '0404',
      '0405',
      '0406',
      '0414',
      '0512',
      '0707',
      '0807',
      '0814',
      '0909',
      '0918',
      '0930',
      '1025',
      '1213',
    ];
  
    const currentdate = new Date();
    const str =
      `${currentdate.getMonth() > 9 ? '' : '0'}${currentdate.getMonth() + 1}` +
      `${currentdate.getDate() > 9 ? '' : '0'}${currentdate.getDate()}`;
    if (PSFarr.indexOf(str) > -1) {
      document.querySelector('html').style.filter = 'grayscale(100%)';
    }
  })();