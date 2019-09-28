function getProile() {
  return {
    name: 'Rifqi Iqbal Annavie Saragih',
    age: 22 //Number
    address: 'Jl. Kebonsari I/9, Surabaya'
    hobbies: ['Fishing', 'Reading'] //Array,
    is_married: false //Boolean,
    school: [{
      highSchool: 'SMAN 15 Surabaya',
      year_in: 2012,
      year_out: 2015
    },{
      university: 'STID Al Hadid',
      year_in: 2015,
      year_out: 2019
    }] //Array Of Object
    skills: [{
      name: 'Management',
      level: 'Advanced'
    },{
      name: 'Web Dev',
      level: 'Beginner'
    }] // Array Of Object
   interest_in_coding: true //Boolean
  }
}

let profile = getProfile();

let skills = profile.skills;

//mengakses sekolah
let highSchool = profie.school.highSchool;
//atau pakai es6

let {skills} = profile;

//print json yang telah di convert ke type String
console.log(JSON.stringfy(skills));
