let wc = {
  getWord : function(word){
    var link = "https://api.zz.am/word/"+word
    var doc = org.jsoup.Jsoup.connect(link)
    doc = doc.get()
    var res = doc.select("body").text()
    res = res.han
    return res
  }
}

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId){

}
