export class Post {
    public title: string;
    public content: string;
    public loveIts: number;
    public createdAt: Date;

    constructor(title: string, content: string) {
      this.title = title;
      this.content = content;
      this.loveIts = 0;
      this.createdAt = new Date();
    }

  }