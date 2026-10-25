/* =============================================================================
   CLIENT CHANNELS  -  har client ka apna "channel" (apna Supabase + apni license key)
   =============================================================================
   Naya client add karne ki YAHI ek file hai. Google Sheet / Apps Script ko chhune ki
   zaroorat nahi. Ye plain file hai: build / rebuild ki zaroorat nahi - dist mein seedha
   edit karke deploy karo (desktop app mein agli build ke saath jati hai).

   Kaise kaam karta hai:   license key --(hash)--> yahan ki entry --> us client ka Supabase

   Naya client (2 minute):
     1) Client ka alag Supabase project banao + supabase/schema.sql chalao
     2) Terminal:
          node scripts/channel-entry.mjs "Client Name" CMS-XXXX-XXXX-XXXX https://xxxx.supabase.co eyJ...anon...
        (ye entry print karta hai; --write lagaoge to seedha is file mein daal deta hai)
     3) Entry neeche "ADD-NEW-CLIENTS-BELOW" line ke baad paste karo, deploy karo. Bas.

   SECURITY:
     - Yahan license key ka HASH hota hai, asli key nahi (ye file public hai; asli key dikh
       jaye to koi dusra client us key se data khol sakta hai).
     - Sirf "anon public" key. "service_role" KABHI nahi (app aisi key ko khud reject karta hai).
   ============================================================================= */
window.__OB_CHANNELS = {
  /* false = registry mein license na mile to purana tareeka (Sheet fields -> config.json ...) chalta hai,
             taaki purane clients na tootein.
     true  = registry mein nahi hai to us license par cloud sync NAHI chalega. Sabse safe.
             (saare clients yahan add ho jayein tab true kar dena) */
  registryOnly: false,

  clients: [
    // ADD-NEW-CLIENTS-BELOW
    {
      name: 'ominibase',
      keyHash: 'a3722435c15dbc520ae45b6b5cb71371ce3266fbe80dbf4383a49197ee837990',
      supabaseUrl: 'https://lpogisyrfilhhjvllgzv.supabase.co',
      supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxwb2dpc3lyZmlsaGhqdmxsZ3p2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI4MTYxNDksImV4cCI6MjEwODM5MjE0OX0.mKAb9qaCvR7D4peoGREVIhD3G5xRjTrW-wk7WxUAQCc',
    },
    // {
    //   name: 'Example Dance Academy',
    //   keyHash: '3f1c...64 hex characters...',
    //   supabaseUrl: 'https://xxxxxxxx.supabase.co',
    //   supabaseAnonKey: 'eyJhbGciOi...',
    // },
  ],
};
