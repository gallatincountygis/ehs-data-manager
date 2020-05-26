import esri = __esri;

export function getTylerLink(view: esri.View) {
  if (view.popup.featureCount === 0) {
    return;
  }
  console.log(view.popup);
  view.popup.features.forEach(a => {
    console.log(a);
  });
}

export async function getPermit(e: esri.PopupTriggerActionEvent) {
  const className = e.action.className;
  const title = e.action.title;
  try {
    e.action.className = 'esri-icon-loading-indicator loader';
    e.action.title = 'Getting permit';
    const permit = e.target.selectedFeature.attributes['GCCHDWWTP'];
    const response = await fetch('https://ehs-cm-service.herokuapp.com/?permit=' + permit, {
      method: 'GET'
    });
    const doc = await response.json();
    if (doc?.documentid) {
      window.open('http://eagleweb.gallatin.mt.gov/eaglecm/eagleweb/viewDoc.jsp?node=' + doc.documentid, '_blank');
    } else {
      alert('nothing found');
    }
  } catch (err) {
    alert(err);
  } finally {
    e.action.className = className;
    e.action.title = title;
  }
}
