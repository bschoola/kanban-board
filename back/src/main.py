import uvicorn
from fastapi import FastAPI

app = FastAPI()

print(f"main.py with :{app}")

@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/api/data")
async def get_data():
    data = {"name": "John Doe", "age": 30}
    return data


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=False, log_level="debug" )#, # debug=True,
                # workers=1, limit_concurrency=1, limit_max_requests=1)
