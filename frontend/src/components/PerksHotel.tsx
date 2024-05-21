export default function Perks({selected,onChange}:any) {
    function handleCbClick(ev:any) {
      const {checked,name} = ev.target;
      if (checked) {
        onChange([...selected,name]);
      } else {
        onChange([...selected.filter((selectedName:any) => selectedName !== name)]);
      }
    }
    return (
      <>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" checked={selected.includes('Wifi')} name="Wifi" onChange={handleCbClick}/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
          </svg>
          <span>Wifi</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" checked={selected.includes('AC')} name="AC" onChange={handleCbClick}/>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-air-vent"><path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 8h12"/><path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"/><path d="M6.6 15.6A2 2 0 1 0 10 17v-5"/></svg>
          <span>AC</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" checked={selected.includes('LED')} name="LED" onChange={handleCbClick}/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
          </svg>
          <span>LED</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" checked={selected.includes('5 star')} name="5 star" onChange={handleCbClick}/>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          <span>5 star</span>
        </label>
       
        {/* <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" checked={selected.includes('entrance')} name="entrance" onChange={handleCbClick}/>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
          </svg>
          <span>Private entrance</span>
        </label> */}
      </>
    );
  }