function Playlist() {
  this.songs = [];
  this.songsIndex = 0;
}

Playlist.prototype.add = function (song) {
  this.songs.push(song);
};
Playlist.prototype.play = function () {
  return `${this.songs[this.songsIndex].title} playing`;
};
Playlist.prototype.next = function () {
  let left = this.songs[this.songsIndex].title;
  this.songsIndex = ++this.songsIndex % this.songs.length;
  let right = this.songs[this.songsIndex].title;
  return `${left} stop  playing ${right} starting to play`;
};
Playlist.prototype.stop = function () {
  return `hey ${this.songs[this.songsIndex].title} stop`;
};
function Song(title, artist) {
  this.title = title;
  this.artist = artist;
}
const heyJude = new Song("Hey Jude", "The Beatles");
const heyJude2 = new Song("Hey Jude2", "The Beatles2");
const player = new Playlist();
player.add(heyJude);
player.add(heyJude2);
console.log(player.songs);
console.log(player.play());
console.log(player.next());
console.log(player.next());
console.log(player.next());
console.log(player.stop());
