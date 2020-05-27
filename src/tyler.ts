import esri = __esri;

interface PopupActionEvent extends esri.PopupTriggerActionEvent {
  target?: esri.Popup;
}

export function getTylerLink(view: esri.View) {
  if (view.popup.featureCount === 0) {
    return;
  }
  console.log(view.popup);
  view.popup.features.forEach(a => {
    console.log(a);
  });
}

export async function getPermit(e: PopupActionEvent, w: Window) {
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
      w.location.href = 'http://eagleweb.gallatin.mt.gov/eaglecm/eagleweb/viewDoc.jsp?node=' + doc.documentid;
      w.focus();
      //window.open('http://eagleweb.gallatin.mt.gov/eaglecm/eagleweb/viewDoc.jsp?node=' + doc.documentid, '_blank');
    } else {
      w.close();
      alert('nothing found');
    }
  } catch (err) {
    w.close();
    alert(err);
  } finally {
    e.action.className = className;
    e.action.title = title;
  }
}
