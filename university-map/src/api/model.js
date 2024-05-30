import axios from 'axios'

export const getUniversityName = async function (question) {
    const test = "提取问题中的大学名称，以json格式输出，大学名称对应的字段名是university_name。针对“" + question + "”这个问题，输出的json是："
    console.log(test)
    const res = await axios.post('/model', {
      text: test
    })
    return res.data
  }