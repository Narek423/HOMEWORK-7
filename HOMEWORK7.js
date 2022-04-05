N.1

function delay(ms) {
    return new Promise(res => setTimeout(() => res(), ms));
 };


N.2

Promise.allSettled(urls.map(url => fetch(url)))
  .then(responses => { 
    for(let response of responses) {
      alert(response);
    }
  });


N.3

async function loadJson(url) { 
  let response = await fetch(url);

  if (response.status == 200) {
    let json = await response.json(); 
    return json;
  }

  throw new Error(response.status);
}

N.4

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then(result => alert(result));
}
