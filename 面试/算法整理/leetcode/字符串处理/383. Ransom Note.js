/*

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

 */
var canConstruct = function(ransomNote, magazine) {

	  var map = {};
    magazine.split('').forEach(function(element, index) {
        if(!map[element]){
        	map[element] = 1
        }else{
        	map[element] += 1
        }
    });
    console.log(map)
    var ransomNoteArr = ransomNote.split('')
    for(var i = 0;i<ransomNoteArr.length;i++){
        console.log(ransomNoteArr[i])
        console.log(map[ransomNoteArr[i]])
    	if(map[ransomNoteArr[i]] == undefined || map[ransomNoteArr[i]] == 0){
    		return false
    	}else{
    		map[ransomNoteArr[i]] -=1
    	}
      console.log(map[ransomNoteArr[i]])
    }
    return true
};



//test
var magazine = "effjfggbffjdgbjjhhdegh"
var ransomNote = "fffbfg"
var canConstruct = function(ransomNote, magazine) {

	  var map = {};
    magazine.split('').forEach(function(element, index) {
        if(!map[element]){
        	map[element] = 1
        }else{
        	map[element] += 1
        }
    });
    var ransomNoteArr = ransomNote.split('')
    for(var i = 0;i<ransomNoteArr.length;i++){
    	if(!map[ransomNoteArr[i]] && map[ransomNoteArr[i]] == 0){
    		return false
    	}else{
    		map[ransomNoteArr[i]] -=1
    	}
      console.log(map[ransomNoteArr[i]])
    }
    return true
};
canConstruct(ransomNote,magazine)



// 比较快的解法
// 

  if (ransomNote.length > magazine.length) { return false; }
    var ransomNoteArr = ransomNote.split('');
    var oldMagazineLength = magazine.length;
    ransomNoteArr.forEach(function(item,index){
        magazine = magazine.replace(item,'');
    });
    if(oldMagazineLength == magazine.length +ransomNoteArr.length) {
        return true;
    } else {
        return false;
    }
    