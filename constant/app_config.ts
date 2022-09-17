const masterConfig = {
  local: {
    server_url: "http://localhost:3000/api",
  },
  staging: {
    server_url: "https://shop-two-sable.vercel.app/api",
  },
  prod: {
    server_url: "https://hire.inaraconsultancy.com",
  },
};

export const { server_url } = masterConfig["local"];
