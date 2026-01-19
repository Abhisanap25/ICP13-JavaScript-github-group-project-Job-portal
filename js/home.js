const data = JSON.parse(localStorage.getItem("profileData"));

if (data) {

  // Name
  document.getElementById("sidebarName").innerText =
    data.firstName + " " + data.lastName;

  // Education
  document.getElementById("sidebarEducation").innerText =
    data.education || "Student";

  // Location
  document.getElementById("sidebarLocation").innerText =
    data.city || "India";

  // Profile Pic
  if (data.profileImage) {
    document.getElementById("sidebarPic").src = data.profileImage;
  }

  // Cover Pic
  if (data.coverImage) {
    document.getElementById("sidebarCover").src = data.coverImage;
  }
  // Middle pic
  if (data.profileImage) {
  document.getElementById("middleProfilePic").src = data.profileImage;
}

}


let sideActivity = document.getElementById("recentActivities");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity(){
     sideActivity.classList.toggle("open-activity");

     if(sideActivity.classList.contains("open-activity")){
        moreLink.innerHTML = "Show less <b>-</b>";
     }
     else{
        moreLink.innerHTML = "Show more <b>+</b>";
     }
}