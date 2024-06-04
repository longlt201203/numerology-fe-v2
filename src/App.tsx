import Input from "@components/Input"
import AnalyzeRequestDto from "@services/dto/analyze-request.dto";
import NumerologyService from "@services/numerology.service"
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import { LineWave } from "react-loader-spinner";
import { Bounce, ToastContainer, toast } from "react-toastify";

function App() {
  const numerologyService = NumerologyService.getInstance();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");
  const [analyzeRequestDto, setAnalyzeRequestDto] = useState<AnalyzeRequestDto>({
    fullName: "",
    dob: "",
    country: ""
  });

  const handleSubmit = () => {
    setIsLoading(true);
    numerologyService
      .analyze(analyzeRequestDto)
      .then((data) => {
        setResult(data);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Analyze Failed!")
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="p-3 container mx-auto">
        <h1 className="text-center text-4xl">Numerology</h1>
        <div className="my-10 flex flex-col gap-y-3 w-2/4 mx-auto border rounded-lg p-3">
          <Input type="text" label="Full Name" placeholder="Input your full name" value={analyzeRequestDto.fullName} onChange={(e) => setAnalyzeRequestDto({ ...analyzeRequestDto, fullName: e.target.value })} />
          <Input type="date" label="Birthday" value={analyzeRequestDto.dob} onChange={(e) => setAnalyzeRequestDto({ ...analyzeRequestDto, dob: e.target.value })} />
          <Input type="text" label="Country" placeholder="Input your country" value={analyzeRequestDto.country} onChange={(e) => setAnalyzeRequestDto({ ...analyzeRequestDto, country: e.target.value })} />
          <button className="border rounded py-1 transition-all hover:bg-gray-50" onClick={() => handleSubmit()}>Submit</button>
        </div>
        <div className="w-2/4 mx-auto">
          <h1 className="text-center text-2xl">Result</h1>
          <div className="mt-10">
            <LineWave visible={isLoading} color="red" width="100%" height="100%" />
            {!isLoading && <MDEditor.Markdown source={result} style={{ whiteSpace: 'pre-wrap' }} />}
          </div>
        </div>
      </div>
    </>

  )
}

export default App
