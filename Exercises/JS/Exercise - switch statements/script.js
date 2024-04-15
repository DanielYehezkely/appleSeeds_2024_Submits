//------------- Exercise - 1 --------------------
let dayOfWeek;
switch (dayOfWeek) {
    case 1:
    case 7:
        console.log("Special screening event");
        break;
    default:
        console.log("Normal screening event");
        break;
}
//------------- Exercise - 2 --------------------
let themeColor;
switch (themeColor) {
    case "light":
        console.log('light mode'); break;
    case "dark":
        console.log('dark mode'); break;
    case "night":
        console.log('night mode'); break;
    default:
        console.log('unsupported color theme'); break;
}
//------------- Exercise - 3 --------------------
let notificationStatus;
switch (notificationStatus) {
    case "new":
    case "unread":
    case "unopened":
        console.log('You have new movie notifications'); break;
    default:
        console.log('read'); break;
}
//------------- Exercise - 4 --------------------
let movieRating;
switch (movieRating) {
    case "G":
        console.log('General Audiences, All Ages Admitted'); break;
    case "PG":
        console.log('Film is suitable for general viewing, but some scenes may be unsuitable for younger children'); break;
    case "PG-13":
        console.log('Some Material May Be Inappropriate for Children Under 13'); break;
    case "R":
        console.log('Under 17 requires accompanying parent or adult guardian'); break;
    case "NC-17":
        console.log('No One 17 and Under Admitted'); break;
    default: 
    console.log('not a vaild rating');
    break;
}
//------------- Exercise - 5 --------------------
let audienceScore;
switch (audienceScore) {
    case audienceScore >= 90:
        console.log('Must watch'); break;
    case audienceScore <= 89 && audienceScore >= 75:
        console.log('Recommended'); break;
    case audienceScore <= 74 && audienceScore >= 60:
        console.log('Mixed reviews'); break;
    case audienceScore < 60:
        console.log('Skip it'); break;
    default: 
    console.log('not a valid score'); break;
}
//------------- Exercise - 6 --------------------
let userInput;
switch (typeof userInput) {
    case 'string':
        console.log("string");
        break;
    case 'number':
        console.log("number");
        break;
    case 'boolean':
        console.log("boolean");
        break;
    default:
        console.log("The type of userInput is not string, number, or boolean.");
        break;
}
//------------- Exercise - 7 --------------------
let releaseMonth ;
switch (releaseMonth) {
    case 1:
    case 2:
    case 3:
        console.log('Q1');break;
    case 4:
    case 5:
    case 6:
        console.log('Q2');break;
    case 7:
    case 8:
    case 9:
        console.log('Q3');break;
    case 10:
    case 11:
    case 12:
        console.log('Q4');break;
        default:
            console.log('not a valid month'); break ;
}