const masterConfig = {
  local: {
    server_url: "http://localhost:3000/api",
  },
  staging: {
    server_url: "https://classy-blini-247a61.netlify.app/api",
  },
  prod: {
    server_url: "https://hire.inaraconsultancy.com",
  },
};

export const { server_url } = masterConfig["staging"];
