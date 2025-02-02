import axios from 'axios';

class OpenaiClient {
  constructor() {
    this.apiKey = process.env.REACT_APP_OPENAI_API_KEY;
  }

  async completion(messages) {
    console.log(messages);
    const requestData = {
      model: 'gpt-4o-mini',
      store: true,
      messages,
    };

    const response = await axios.post('https://api.openai.com/v1/chat/completions', requestData, {
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${this.apiKey}` },
    });
    return (await response).data.choices[0].message.content;
  }
}

const openai = new OpenaiClient();
export default openai;
