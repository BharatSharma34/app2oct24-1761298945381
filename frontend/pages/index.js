import { useEffect, useState } from "react";
import { api } from "../utils/api";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => { 
    api.get("/health").then(r => setData(r.data));
  }, []);

  return (
    <div style={{padding:"2rem"}}>
      <h1>app2oct24</h1>
      <p>test</p>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}
