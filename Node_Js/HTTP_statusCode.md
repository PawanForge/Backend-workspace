Bilkul — **bahut simple language** mein yaad rakho:

### HTTP Status Codes — Easy Notes

**🟢 200 — OK**
➡️ Sab kuch **successfully ho gaya**.

**🟢 201 — Created**
➡️ **Naya data create** ho gaya.

**🟢 204 — No Content**
➡️ Kaam successful, but **response mein data nahi hai**.

---

**🔴 400 — Bad Request**
➡️ User ne **galat/incomplete data** bheja.

**🔴 401 — Unauthorized**
➡️ **Login nahi kiya** / valid login token nahi hai.

**🔴 403 — Forbidden**
➡️ Login hai, but **permission nahi hai**.

**🔴 404 — Not Found**
➡️ Jo cheez maangi hai **woh mili nahi**.

**🔴 405 — Method Not Allowed**
➡️ Is URL par **ye method allowed nahi hai**.

**🔴 409 — Conflict**
➡️ Request ka **existing data se conflict** hai.
Example: Same email already exists.

**🔴 422 — Validation Error**
➡️ Data bheja hai, but **data valid nahi hai**.

**🔴 429 — Too Many Requests**
➡️ Bahut zyada requests bhej di.

---

**⚠️ 500 — Internal Server Error**
➡️ **Backend/server mein problem** aa gayi.

**⚠️ 502 — Bad Gateway**
➡️ Backend ko **dusre server se galat response** mila.

**⚠️ 503 — Service Unavailable**
➡️ Server/service **abhi available nahi hai**.

**⚠️ 504 — Gateway Timeout**
➡️ Dusre server ka response **bahut late aa raha hai**.

### 🧠 Sabse easy trick

> **200 = Sab OK ✅**
> **400 = Meri request galat ❌**
> **401 = Login karo 🔐**
> **403 = Permission nahi 🚫**
> **404 = Mila nahi 🔍**
> **500 = Server mein problem ⚠️**
