import { useState } from "react";

function App() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) return;

    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("http://localhost:5000/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();

      setAnswer(data.answer);
    } catch (error) {
      setAnswer("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6">

        <h1 className="text-3xl font-bold text-center mb-2">
          🤖 RAG Chatbot
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Ask a question about the document
        </p>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask something..."
          className="w-full border rounded-lg p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />

        <button
          onClick={askQuestion}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Thinking..." : "Ask Question"}
        </button>

        {answer && (
          <div className="mt-6 bg-gray-50 border rounded-lg p-4">
            <h2 className="font-semibold mb-2">Answer</h2>
            <p className="text-gray-700">{answer}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;