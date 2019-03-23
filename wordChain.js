let wc = {
  getWord : function(word){
    var link = "https://api.zz.am/word/"+word
    var doc = org.jsoup.Jsoup.connect(word)
    doc = doc.get()
    return doc
  }
}

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){

}
