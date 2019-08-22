export class Article {
    public title:string;
    public link:string;
    public votes:number;

    constructor(myTitle: string,myLink: string,myVotes?:number){
    this.title=myTitle;
    this.link=myLink;
    this.votes=myVotes || 0;
     }

     voteUp() :void{
         this.votes+=1;
     }
     voteDown() :void{
         this.votes-=1;
     }

     domain():string{
         try{
             const domainAndPath:string = this.link.split('//')[1];
             return domainAndPath.split('/')[0];
         }catch(err){
             return null;
         }
     }

}