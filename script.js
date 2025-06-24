let stars = document.querySelectorAll("#stars i");
let emoji = document.getElementById("emoji");
let label = document.getElementById("label");
let feedbackBox = document.getElementById("feedback-box");

let emojis = ["😡", "😕", "😐", "🙂", "😄"];
let labels = ["Terrible", "Bad", "Average", "Good", "Excellent"];

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    updateStars(index);
    fadeEmojiTransition(emojis[index], labels[index]);
    feedbackBox.style.display = "flex";
  });
});

function updateStars(index) {
  stars.forEach((s, i) => {
    s.classList.toggle("active", i <= index);
  });
}

function fadeEmojiTransition(newEmoji, newLabel) {
  emoji.style.opacity = 0;
  setTimeout(() => {
    emoji.textContent = newEmoji;
    label.textContent = newLabel;
    emoji.style.transform = "scale(1.3)";
    emoji.style.opacity = 1;
    setTimeout(() => emoji.style.transform = "scale(1)", 200);
  }, 200);
}

let feed=document.getElementById("inpEl");
function viewFeedback() {
  let feedbck=feed.value;
  let feedlist = JSON.parse(localStorage.getItem("feedlist") || "[]");
  
  feedlist.push(feedbck);
  localStorage.setItem("feedlist", JSON.stringify(feedlist.slice(0, 5)));
  alert("feedback:\n" + feedlist);
}
