const prod = process.env.NODE_ENV === 'production';
module.exports = {
  backendUrl: prod ? 'http://api.birdgang.kr' : 'http://localhost:3065',
  imageUrl: prod ? null : 'http://localhost:3065/images',
};
