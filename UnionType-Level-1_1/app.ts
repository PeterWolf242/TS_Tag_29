type Result = "success" | "error" | "pending";

let newResult: Result = "success";

function handleResult(newResult: Result): Result {
  console.log(newResult);
  return newResult;
}

handleResult("success");
