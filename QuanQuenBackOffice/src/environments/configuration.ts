const baseUrlQA: string = 'http://192.168.1.92:5002';
const baseUrlDev: string = 'http://192.168.1.98:5002';

export const environments = {
    BaseUrl: baseUrlQA,
    Identity: {
        Account: {
            email: "admin1@vsirius.com",
            password: "test1234"
        }
    }
}
