import SampleJson from "../aiData/SampleJson.json"
const getBotResponse = (userInput) => {
    const normalized=userInput.trim().toLowerCase();
    const found=SampleJson.find((item)=>item.question.toLowerCase()===normalized);
    return found?found.response:"Sorry, Did not understand your query!"
}

export default getBotResponse;