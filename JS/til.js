'use strict';


class Post {
  
    constructor(text){
    this.text = text;
    this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`)
    }

    like(){
      this.likeCount++;
    }
    //静的メソッド
    //thisは使えない
   static showInfo(){
      console.log('Post class version 1.0')
    }
  }
class SponsoredPost extends Post {
  
    constructor(text, sponsored){
      super();
    this.text = text;
    this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`)
      console.log(`...sponsored by ${this.sponsore}`)
    }

    like(){
      this.likeCount++;
    }
    //静的メソッド
    //thisは使えない
   static showInfo(){
      console.log('Post class version 1.0')
    }
  }

 const posts = [
   new Post('JavaScriptの勉強中'),
   new Post('プログラミング楽しい'),
   new SponsoredPost('３分動画でマスターしよう', 'test')
 ];

// posts[0].like();

posts[2].show();
posts[2].like();

