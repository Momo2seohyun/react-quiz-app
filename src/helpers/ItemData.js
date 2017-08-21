import { Required } from "./validate";

export const data =[
  {
    img: "images/001.jpg",
    title: "Leader Board",
    titleColor: "header-color-grey"
  },
  {
    img: "images/002.jpg",
    title: "Food & Drink",
    titleColor: "header-color-green",
    lesson: [
      {
        lesson: 1,
        question: "สีไหนไม่ใช่สีของธงชาติไทย ?",
        trueAnswer: "สีเขียว",
        answer: [
          {
            label: "สีแดง",
            value: "red"
          },
          {
            label: "สีขาว",
            value: "white"
          },
          {
            label: "สีเขียว",
            value: "green"
          },
          {
            label: "สีน้ำเงิน",
            value: "blue"
          }
        ]
      },
      {
        lesson: 2,
        question: "1 + 1 = ?",
        trueAnswer: "2",
        answer: {
          min: 0,
          max: 5,
          step: 1
        }
      },
      {
        lesson: 3,
        question: "สัตว์ประจำชาติคือ ?",
        trueAnswer: "elephant",
        validate: Required,
      },
      {
        lesson: 4,
        question: "เลือดมนุษย์มีสีแดง ?",
        trueAnswer: "True",
      },
      {
        lesson: 5,
        question: "เลือกข้อที่เป็นกรุ๊ปเลือด ?",
        trueAnswer: ["O, A, B"],
        answer: ["O","A","B","C","D"]
      }
    ]
  },
  {
    img: "images/003.jpg",
    title: "General Knowledge",
    titleColor: "header-color-yellow"
  },
  {
    img: "images/004.jpg",
    title: "History",
    titleColor: "header-color-blue"
  },
  {
    img: "images/005.jpg",
    title: "Entertainment",
    titleColor: "header-color-red"
  },
  {
    img: "images/006.jpg",
    title: "Sports",
    titleColor: "header-color-purple"
  },
  {
    img: "images/007.jpg",
    title: "Geography",
    titleColor: "header-color-red"
  },
  {
    img: "images/008.jpg",
    title: "Science and Nature",
    titleColor: "header-color-green"
  },
  {
    img: "images/001.jpg",
    title: "TV & Movies",
    titleColor: "header-color-purple"
  },
  {
    img: "images/002.jpg",
    title: "Music",
    titleColor: "header-color-green"
  }
]