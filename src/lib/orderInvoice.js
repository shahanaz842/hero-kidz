export const orderInvoiceTemplate = ({ userName, orderId, items }) => {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
    <h2>🧾 Order Confirmation</h2>
    <p>Hi <strong>${userName}</strong>,</p>
    <p>Thank you for your order! Here are your order details:</p>

    <p><strong>Order ID:</strong> ${orderId}</p>

    <table width="100%" border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse;">
      <thead>
        <tr>
          <th align="left">Product</th>
          <th align="center">Qty</th>
          <th align="right">Price</th>
        </tr>
      </thead>
      <tbody>
        ${items
          .map(
            (item) => `
          <tr>
            <td>${item.title}</td>
            <td align="center">${item.quantity}</td>
            <td align="right">৳${item.price * item.quantity}</td>
          </tr>`
          )
          .join("")}
      </tbody>
    </table>

    <h3 style="text-align:right;">Total: ৳${total}</h3>

    <p>📦 We’ll notify you once your order is shipped.</p>

    <p style="margin-top:20px;">
      Thanks,<br/>
      <strong>Hero Kidz</strong>
    </p>
  </div>
  `;
};
