from fastapi import FastAPI

app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


# uvicorn.run(
#     "app:app",
#     host=os.getenv("HOST", "0.0.0.0"),
#     port=int(os.getenv("PORT", 8000)),
#     # workers=int(os.getenv("WORKERS", 4)),
#     log_level=os.getenv("LOG_LEVEL", "info"),
# )
