// Comunicacion de la instancia de Woocommerce

export async function getProducts(url, bat) {
  
  const endPointUrl = url + '/wp-json/wc/v3/products';
  const requestOptions = { headers: { 'Authorization': 'Basic ' + bat } };
  try {
    let response = await fetch(endPointUrl, requestOptions);
    let json = await response.json()
    if (response.ok) return { success: true, data: json }
    else return { success: false, data: json }
  } catch (error) {
    return { success: false, data: error };
  }
}

