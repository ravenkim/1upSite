import React from "react";
import SSmobile from "src/shared/layouts/SSmobile";

const artists = [
  {
    name: "아이유",
    image: "https://i.imgur.com/iu.jpg",
    description: "싱어송라이터, 배우",
    link: "https://www.instagram.com/dlwlrma/"
  },
  {
    name: "BTS",
    image: "https://i.imgur.com/bts.jpg",
    description: "글로벌 K-POP 그룹",
    link: "https://ibighit.com/bts/kor/"
  },
  {
    name: "블랙핑크",
    image: "https://i.imgur.com/bp.jpg",
    description: "글로벌 걸그룹",
    link: "https://www.blackpinkofficial.com/"
  },
  {
    name: "뉴진스",
    image: "https://i.imgur.com/nj.jpg",
    description: "4세대 K-POP 걸그룹",
    link: "https://www.instagram.com/newjeans_official/"
  }
];

const ArtistPage = () => {
  return (
      <SSmobile>
          <div
              className="relative flex size-full min-h-screen flex-col bg-background justify-between group/design-root overflow-x-hidden"
              style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
          >
              <div>
                  <div className="flex items-center bg-background p-4 pb-2 justify-between">
                      <h2 className="text-foreground text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12 pr-12">Artists</h2>
                  </div>
                  <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-8">
                      <div className="flex flex-col gap-3 pb-3">
                          <div
                              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCo9ITcWXpM4DWO2zXb5MfbRziaWSqPBuWvno-frJMWORvajUYu60wKy0J8tEs_pRT62rHsAXi-FhuiKJKn1aaro7XelVvlUKqsbPWiqi9X9s5T1Kli2nGSj52TxkSBwhi9Re8uiZMtFfWrlOdhDUbdA5Yz36jdEskTs8dz-mKQKKmQmCM0AH9OKUniBx1vwDoh-5GnE2f04sdJ3D0XqMH7_0vMVcD5EkBkgSmJa-ceOEL5bTmkga6BEcblKFZL_Gx4rcRRfHBtDMFP")' }}
                          ></div>
                          <div>
                              <p className="text-foreground text-base font-medium leading-normal">Ava Carter</p>
                              <p className="text-muted-foreground text-sm font-normal leading-normal">Contemporary Painter</p>
                          </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                          <div
                              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC-Q6QZaljxmkS275GK6iXFGoM1A3Lgls2K0wTZNzfz_INscstwunZ2KTe_Vs1l_Ab4SCpBMMXOzIlHlylp8MVRFvmmgQ1b79bb7kuZ4qo1A3yUKEs_U6NImpR67uWf97blXmAF0Ej_SXpgOXuey6NQYcaKEq3F_9BUUyZpeOSUQ_VBE2Xf4RAMLSIGZS44YcQ8s9jL4tFKbtENXbwZVPl45kI8s3vGBqZdrpc_6sqAYbL3yTeweSp-sWR5yj-uB_gjTWg0HWkZO6W5")' }}
                          ></div>
                          <div>
                              <p className="text-foreground text-base font-medium leading-normal">Ethan Blake</p>
                              <p className="text-muted-foreground text-sm font-normal leading-normal">Digital Artist</p>
                          </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                          <div
                              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDDt1MW907CMowu2GN-pXz0tLbxU9axu5D0CrKDlEyaHdIl0wZyezVAYcPTOOxm4TYSX9ZEfAhupjjbZ2d4z6ZmADwG3tm8ySJF9TE5qfIpInv4rF6QW2DMmiAt0Xr00gE4ThxhYIRaAJmBv34gGgkTxMSfp-VOaPh8kKTcYDxY1gbPOJtZ1fI3iG9jhJ3cLg1SQl8slW7CZt6FL2OQVtU0Xr7bVQbccP5IY_91R1cfYk4GaOPDWOk_IVtEjc4uafM5kUOubll9JEto")' }}
                          ></div>
                          <div>
                              <p className="text-foreground text-base font-medium leading-normal">Sophia Reed</p>
                              <p className="text-muted-foreground text-sm font-normal leading-normal">Sculptor</p>
                          </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                          <div
                              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCgj6MyfFuiRqOJHGhlaqk6vQBLIASB83H8qJ9V7XNb5KGXkglTwpGEh4PTNjORdyElTBU_-DJTrMkiYXKgpEXrQQlMpzlR2SFGmRlwWekB7wjdiFiY0j-eyZWi6ofaD1T8VyJlSn55jpHKXyNgl_8CjAPwVN1RUdgmpNQNfewwFKFyTY3iCFRwuFo2YUpqsEwPHWXH36EOij-SHFTRrs1RrDWwTGoNw8eAb-7zP3Tnw8oWq8Wgj9gNqKF941o6ww0Hjx1kzGxhEZ5F")' }}
                          ></div>
                          <div>
                              <p className="text-foreground text-base font-medium leading-normal">Liam Hayes</p>
                              <p className="text-muted-foreground text-sm font-normal leading-normal">Mixed Media Artist</p>
                          </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                          <div
                              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyvNZ6FZLkvaY02sFRxYSyhAEx82YcYLj9v1KdZCdnmP2qTmT0LiIIdun_JiO33XW80u3k68PJDpNmOvxVRVZsN0g65sJGfdPIgmm8l3sIEnWynftEWvONSUB013OW8ux7_a9tGUhdwB63rJwo6E36HhHXLzUTJnDISm8IACRYPEH4IDtrYCGopCW8kOcQLUOgONOLIxoztyq9cLIsXBP5W94gvQ4sllO6HdmrYy8bTNslEZ07XZyXSjfQ-4d9EWqbgkrU1_pE-vVD")' }}
                          ></div>
                          <div>
                              <p className="text-foreground text-base font-medium leading-normal">Olivia Bennett</p>
                              <p className="text-muted-foreground text-sm font-normal leading-normal">Photographer</p>
                          </div>
                      </div>
                      <div className="flex flex-col gap-3 pb-3">
                          <div
                              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                              style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBHaYEZMFreKpgMn5dcFWbsOrOEewBeaMRa8f7VdRvddgTSoNTkKldT0rj3fWKFliPFfTtvFqKqd2aMAfig3ACzd1FGc6_GiaRnQHmlzhFJ2nxn1JBNqH3ldRyyakzxBRTF93QRvWQONNIDu-eQuc0swLNJs3m-cWaunVWilMOI-Maa4JkzbKjP9qIgxc4vQIJFEriUTwQE7lbyOQg14H2eOBRkuyUWxIlM43L2M-PgKvxZj1z7uf1Lp2Ct3qU5UiN5HgeTWNLFBPDg")' }}
                          ></div>
                          <div>
                              <p className="text-foreground text-base font-medium leading-normal">Noah Parker</p>
                              <p className="text-muted-foreground text-sm font-normal leading-normal">Illustrator</p>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </SSmobile>
  );
};

export default ArtistPage; 