import { useEffect, useState } from "react";
import axios from "axios";
export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => { axios.get("/api/health").then(r => setData(r.data)); }, []);
  return <div style={{padding:"2rem"}}><h1>app2oct24</h1><p>test</p><pre>{JSON.stringify(data,null,2)}</pre></div>;
}