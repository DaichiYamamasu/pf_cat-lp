const faqQuestions = document.querySelectorAll('.faq_question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // クリックされた faq_question の次の兄弟要素である faq_answer を取得
    const answer = question.nextElementSibling;
    console.log(answer);

    // faq_answer の hidden 属性を切り替え、表示/非表示を制御
    answer.hidden = !answer.hidden;

    // aria-expanded属性を更新
    question.setAttribute('aria-expanded', !answer.hidden);


     //アコーディオンのように開閉したい場合
    // 他のfaq_answerを閉じる処理を追加
     faqQuestions.forEach(otherQuestion => {
         if(otherQuestion !== question){
            const otherAnswer = otherQuestion.nextElementSibling;
             otherAnswer.hidden = true;
             otherQuestion.setAttribute('aria-expanded', false);
         }
       });
  });
});


