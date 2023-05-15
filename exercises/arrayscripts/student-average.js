let students = [
    { name: "Zephaniah", scores: [100, 96, 99, 92] }, //an array of test scores for a particular student
    { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
    { name: "Siddalee", scores: [86, 72, 92] },
    { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
    { name: "Elisha", scores: [89, 100] },
    { name: "Ezra", scores: [100, 99, 100, 87] },
  ]; //array of objects representing students
  
  for (let index = 0; index < students.length; index++) {
    const student = students[index];
    console.log(student.name);
  
    let totalOfAllScores = 0;
    for (let index = 0; index < student.scores.length; index++) {
      const score = student.scores[index];
      totalOfAllScores = totalOfAllScores + score;
    }
  
    let numberOfScores = student.scores.length;
    let averageScore = totalOfAllScores / numberOfScores;
    console.log(averageScore);
  }
  
  // let student2 = students[1];
  // let student2Scores = student2.scores;
  
  // for (let index = 0; index < student2Scores.length; index++) {
  //     const score = student2Scores[index];
  //     console.log(score);
  // }