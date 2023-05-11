// Задание №1 //

class PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
}

fix(){
    this.state = this.state * 1.5;
}

set state(fix){
    if (fix < 0){
        this._state = 0;
    }else if (fix > 100){
        this._state = 100;
    }else {
        this._state = fix;
    }
}

get state(){
    return this._state;
}

class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount, author);
        this.type = "novel";
    }
}


class FantasticBook extends Book{
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor(name, releaseDate, pagesCount, author){
        super(name, releaseDate, pagesCount, author);
        this.type = "detective";
    }
}

// Задание №2 //

class Library{
    constructor(name){
      this.name = name;
      this.book = [];  
    } 
}

addBook(book){
    this.book = book;
    if(this.book.state > 30){
        return this.books.push(this.book);
    } 
}

findBookBy(type, value){
    return this.books.find(book => book[type] === value) || null;
}

giveBookByName(bookName){
    let i = this.books.findIndex(el => el.name === bookName);
    if(i = -1){
        return null;
    }else{
        let arr = this.books.splice(i, 1);
        return arr[0];
    }
}

// Задание №3 //

class Student{
    constructor(name, marks){
        this.name = name;
        this.marks = {}
    }
    addMark(mark, subject){
        if(mark >= 2 && mark <= 5){
            if(this.marks[subject] === undefined){
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }
    }
    getAverageBySubject(subject){
        let averageBySubject = 0;
        if(this.marks[subject] !== undefined){
            averageBySubject =this.marks[subject].reduce((arr, acc, item, index) =>{
                acc +- item;
                if(index === arr.length - 1){
                    return acc / arr.length;
                }
                return acc;
            }, 0) 
        }
        return averageBySubject;
    }
    getAverage() {
        let overallAverage = Object.keys(this.marks).reduce((acc, item, index, arr) => {
            acc += this.getAverageBySubject([item]);
            if(index === arr.length -1) {
             return acc / arr.length;
            }
            return acc;
        }, 0)
        return overallAverage;
    }
}