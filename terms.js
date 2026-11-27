// 全站术语表：中文名 / 英文名 / 图上用的短英文 / 符号 / 出处
// 符号写法 'd|a0' = d 下标 a0；'—' = 标准里没有符号。出处代码见 TC.SRC。
// 英文名、符号都要有出处；标准里查不到的英文名标 SITE（本站译名），不编造符号。
(function () {
  'use strict';
  const SRC = {
    ISO1122: 'ISO 1122-1:1998 齿轮术语',
    ISO21771: 'ISO 21771:2007 圆柱齿轮概念与几何',
    ISO1328: 'ISO 1328-1 齿轮精度',
    ISO3002: 'ISO 3002-1 切削刀具角度',
    DIN1829: 'DIN 1829-1:1977 插齿刀术语（符号）',
    DIN1829tr: 'DIN 1829-1:1977（英文为德文名称直译）',
    DIN4000: 'DIN 4000-143:2023 插齿刀与滚插刀特性表',
    DIN4000tr: 'DIN 4000-143:2023（英文为德文名称直译）',
    SKV: '论文 Modelling and prevention of meshing interference in gear skiving（Axis crossing angle Σ）',
    NACHI: 'Nachi 样本 T2301E（Gear Shaper Cutters Nomenclature）',
    LBH: 'Liebherr《Stock Tools》/ Gleser 网店',
    SANDVIK: 'Sandvik CoroMill 178 产品页',
    MMT: 'Mech. Mach. Theory 斜齿插齿刀论文（top / side clearance angle）',
    CN937482: 'CN101937482B（顶刃后角 αe）',
    GB6403: 'GB/T 6403.4-2008、GB/T 4458.4（倒角 C）',
    SITE: '本站译名（标准中未查到对应英文名或符号）'
  };
  // [中文, 英文, 图上短英文(空=同英文), 符号, 出处代码…]
  const T = {
    // ---- 工件 ----
    gearKind: ['齿轮类型', 'Gear type', '', '—', 'ISO1122'],
    mn: ['法向模数', 'Normal module', '', 'm|n', 'ISO1122'],
    z: ['齿数', 'Number of teeth', '', 'z', 'ISO1122'],
    an: ['法向压力角', 'Normal pressure angle', '', 'α|n', 'ISO1122'],
    beta: ['螺旋角', 'Helix angle', '', 'β', 'ISO1122'],
    x: ['变位系数', 'Profile shift coefficient', '', 'x', 'ISO1122'],
    da: ['齿顶圆直径', 'Tip diameter', '', 'd|a', 'ISO1122'],
    df: ['齿根圆直径', 'Root diameter', '', 'd|f', 'ISO1122'],
    dFf: ['渐开线起始圆直径', 'Root form diameter', '', 'd|Ff', 'ISO21771'],
    b: ['齿宽', 'Facewidth', '', 'b', 'ISO1122'],
    Ca: ['齿顶修缘量', 'Tip relief', '', 'C|a', 'ISO21771'],
    Cf: ['齿根修缘量', 'Root relief', '', 'C|f', 'ISO21771'],
    Cal: ['齿形鼓形量', 'Profile crowning', '', 'C|α', 'ISO21771'],
    fHa: ['齿形斜率偏差', 'Profile slope deviation', '', 'f|Hα', 'ISO1328'],
    // ---- 滚插刀：齿部 ----
    z0: ['刀具齿数', 'Number of cutter teeth', 'Teeth', 'z|0', 'LBH'],
    beta0: ['刀具螺旋角', 'Cutter helix angle', 'Helix', 'β|0', 'ISO1122'],
    refDia0: ['分度圆', 'Reference diameter', 'Ref. dia.', 'd|0', 'ISO1122', 'LBH'],
    tipDia0: ['外径', 'Tip diameter', 'Tip dia.', 'd|a0', 'DIN1829', 'ISO1122'],
    rootDia0: ['齿根圆', 'Root diameter', 'Root dia.', 'd|f0', 'DIN1829', 'ISO1122'],
    tipDiaEnd: ['齿部末端外径', 'Tip diameter at tooth end', 'Tip dia. at end', '—', 'SITE'],
    tipDiaWorn: ['重磨到底外径', 'Tip diameter, fully resharpened', '', '—', 'SITE'],
    toothW: ['齿长', 'Tooth width', '', 'b|2', 'DIN1829', 'NACHI'],
    regrind: ['可重磨量（轴向）', 'Usable width (resharpening)', '', 'b|3', 'DIN1829tr', 'SANDVIK'],
    rake: ['前刀面', 'Rake face', '', '—', 'ISO3002'],
    gamma: ['前角', 'Rake angle', '', 'γ', 'ISO3002'],
    rakeStep: ['阶梯前刀面', 'Stepped rake face', '', '—', 'SITE'],
    rakeCone: ['锥形前刀面', 'Conical rake face', '', '—', 'SITE'],
    rakeFlat: ['平前刀面', 'Flat rake face', '', '—', 'SITE'],
    alphaE: ['顶刃后角', 'Top clearance angle', '', 'α|e', 'MMT', 'CN937482'],
    tipR: ['刀尖圆角', 'Tip radius', '', '—', 'SANDVIK'],
    lead: ['后刀面导程', 'Lead', '', 'p|z', 'ISO21771'],
    gashRun: ['齿槽收尾', 'Gash run-out', '', '—', 'SITE'],
    // ---- 滚插刀：刀体 ----
    cutType: ['刀具形式', 'Cutter type', '', '—', 'NACHI'],
    totH: ['总高', 'Total height', '', 'b|1', 'DIN1829', 'LBH'],
    totB: ['总厚', 'Total width', '', 'b|1', 'DIN1829tr'],
    webT: ['壁厚', 'Web thickness', '', 'b|4', 'NACHI', 'DIN1829'],
    bore: ['内孔', 'Bore diameter', 'Bore', 'd|3', 'DIN1829', 'NACHI', 'LBH'],
    boreKey: ['孔+键槽', 'Bore + keyway depth', 'Bore+keyway', '—', 'SITE'],
    keyW: ['键槽宽', 'Keyway width', '', '—', 'SITE'],
    keyT: ['键槽深', 'Keyway depth', '', '—', 'SITE'],
    clampOut: ['顶部外径', 'Outer clamping face diameter', 'Outer clamp face', 'd|1', 'DIN1829tr'],
    clampIn: ['螺栓面', 'Inner clamping face diameter', 'Inner clamp face', 'd|2', 'DIN1829tr'],
    cbDia: ['前端内径', 'Counter bore diameter', 'Counter bore', '—', 'NACHI'],
    cbDepth: ['螺栓面深', 'Counter bore depth', 'C\'bore depth', '—', 'NACHI'],
    innerCone: ['内锥', 'Inner cone half-angle', 'Inner cone', '—', 'SITE'],
    topR: ['顶部圆角', 'Top fillet radius', 'Top fillet', '—', 'SITE'],
    transCone: ['过渡锥', 'Transition cone angle', 'Transition cone', '—', 'SITE'],
    chTop: ['顶面倒角', 'Top face chamfer', 'Top chamfer', 'C', 'GB6403'],
    chBore: ['孔口倒角', 'Bore chamfer', '', 'C', 'GB6403'],
    bodyDia: ['刀体直径', 'Body diameter', 'Body dia.', '—', 'SITE'],
    backCb: ['背面沉孔', 'Back counter bore diameter', 'Back c\'bore', '—', 'NACHI'],
    backCbD: ['沉孔深', 'Back counter bore depth', 'C\'bore depth', '—', 'NACHI'],
    // ---- 滚插刀：工艺 ----
    sigma: ['轴交角', 'Axis crossing angle', '', 'Σ', 'DIN4000', 'SKV'],
    cdist: ['中心距', 'Centre distance', '', 'a', 'ISO1122'],
    kappa: ['刀具倾角', 'Tool tilt angle', '', 'κ', 'SITE'],
    offset: ['偏置', 'Tool axis offset', '', '—', 'DIN4000tr'],
    workpiece: ['工件', 'Workpiece', '', '—', 'SITE'],
    // ---- 视图名称、常用词 ----
    vFront: ['正面（看前刀面，一个刀齿朝上）', 'Front view (rake face, one tooth up)', '', '', 'SITE'],
    vSideBowl: ['侧面：轴向剖视（刀齿在下，左半过键槽）', 'Section view (teeth down, left half through keyway)', '', '', 'SITE'],
    vSideDisc: ['侧面：轴向剖视（上半过键槽，左为前刀面）', 'Section view (upper half through keyway, rake face left)', '', '', 'SITE'],
    vBack: ['背面（从后往前看）', 'Back view', '', '', 'SITE'],
    rh: ['右旋', 'RH', '', '', 'SITE'], lh: ['左旋', 'LH', '', '', 'SITE'], spur: ['直齿', 'Spur', '', '', 'SITE'],
    bowl: ['碗形（螺栓压紧）', 'Deep counter bore type (bolt clamped)', '', '', 'NACHI'],
    disc: ['盘形（装心轴）', 'Disk type (arbor mounted)', '', '', 'NACHI'],
    intGear: ['内齿', 'Internal', '', '', 'ISO1122'], extGear: ['外齿', 'External', '', '', 'ISO1122']
  };
  const LS = 'tc.drawLang';
  const subPlain = s => s.replace('|', '');
  const subHtml = s => { const i = s.indexOf('|'); return i < 0 ? s : s.slice(0, i) + '<sub>' + s.slice(i + 1) + '</sub>'; };
  const TC = {
    T, SRC,
    lang() { try { const v = localStorage.getItem(LS); return v === 'en' || v === 'sym' ? v : 'zh'; } catch (e) { return 'zh'; } },
    setLang(v) { try { localStorage.setItem(LS, v); } catch (e) {} document.dispatchEvent(new CustomEvent('tc-lang', { detail: v })); },
    has: k => !!T[k],
    zh: k => T[k] ? T[k][0] : k,
    en: k => T[k] ? T[k][1] : k,
    symPlain: k => T[k] && T[k][3] && T[k][3] !== '—' ? subPlain(T[k][3]) : '',
    symHtml: k => T[k] && T[k][3] && T[k][3] !== '—' ? subHtml(T[k][3]) : '—',
    // 图上用的名称：中文 / 短英文 / 符号（无符号时用短英文）
    name(k, lang) {
      const t = T[k]; if (!t) return k; lang = lang || TC.lang();
      if (lang === 'en') return t[2] || t[1];
      if (lang === 'sym') return t[3] && t[3] !== '—' && t[3] !== '' ? subPlain(t[3]) : (t[2] || t[1]);
      return t[0];
    },
    // 图上标注：名称 + 数值；同时记录本图用过的术语，供对照表使用
    used: new Set(),
    lab(k, val, lang) { TC.used.add(k); const n = TC.name(k, lang); if (val === undefined || val === '') return n; val = String(val); return val.startsWith(n) ? val : n + ' ' + val; },
    word(k, lang) { return TC.name(k, lang); },
    srcText(k) { const t = T[k]; return t ? t.slice(4).map(c => SRC[c] || c).join('；') : ''; },
    // “?” 里的第一行：英文名 · 符号（出处）
    lineHtml(k) {
      const t = T[k]; if (!t) return '';
      return `<b>${t[1]}</b> · ${subHtml(t[3] && t[3] !== '' ? t[3] : '—')}<span class="tc-src">（${TC.srcText(k)}）</span>`;
    },
    hintHtml(keys, extra) {
      const ks = (Array.isArray(keys) ? keys : [keys]).filter(k => T[k]);
      return ks.map(k => `<div class="tc-l">${T[k][0]}：${TC.lineHtml(k)}</div>`).join('') + (extra ? `<div class="tc-x">${extra}</div>` : '');
    },
    // 在 label 后加 “?” 按钮，点开在 after 元素之后显示说明
    qButton(label, keys, extra, afterEl) {
      if (!label || label.querySelector('.q')) return;
      const b = document.createElement('button'); b.type = 'button'; b.className = 'q tc-q'; b.textContent = '?';
      b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-label', '英文名、符号和说明');
      b.addEventListener('click', e => {
        e.preventDefault(); e.stopPropagation();
        const open = b.getAttribute('aria-expanded') === 'true';
        document.querySelectorAll('.hint.tc').forEach(h => h.remove());
        document.querySelectorAll('.q[aria-expanded="true"]').forEach(x => x.setAttribute('aria-expanded', 'false'));
        if (open) return;
        const h = document.createElement('div'); h.className = 'hint tc'; h.innerHTML = TC.hintHtml(keys, typeof extra === 'function' ? extra() : extra);
        const tgt = typeof afterEl === 'function' ? afterEl() : (afterEl || label);
        tgt.after(h); b.setAttribute('aria-expanded', 'true');
      });
      // 标签太长被省略号截断时，“?” 仍要看得见：文字放进可截断的 span，“?” 固定在右边
      if (label.tagName === 'LABEL' && !label.querySelector('.tc-lt')) {
        const sp = document.createElement('span'); sp.className = 'tc-lt'; while (label.firstChild) sp.appendChild(label.firstChild); label.appendChild(sp); label.classList.add('tc-lab');
      }
      label.appendChild(b);
    },
    // 网格输入框：同一行的最后一个格子之后插入说明（两列网格不挤）
    rowEnd(f) { let after = f; const top = f.offsetTop; let n = f.nextElementSibling; while (n && !n.hidden && n.classList.contains('f') && n.offsetTop === top) { after = n; n = n.nextElementSibling; } return after; },
    // 图纸文字开关：中文 / English / 符号
    switcher(el, onChange) {
      if (!el) return;
      const opts = [['zh', '中文'], ['en', 'English'], ['sym', '符号']];
      const draw = () => { const v = TC.lang(); el.innerHTML = '<span class="tc-swl">图上文字</span>' + opts.map(o => `<button type="button" class="btn${o[0] === v ? ' on' : ''}" data-l="${o[0]}">${o[1]}</button>`).join(''); };
      el.addEventListener('click', e => { const b = e.target.closest('[data-l]'); if (!b) return; TC.setLang(b.dataset.l); draw(); onChange && onChange(b.dataset.l); });
      draw();
    },
    // 标注对照表（HTML）
    legendHtml(keys) {
      const ks = [...keys].filter(k => T[k] && T[k][3] !== '');
      if (!ks.length) return '';
      return '<div class="tc-leg"><div class="tc-legt">标注对照（Legend）</div><table><thead><tr><th>中文</th><th>English</th><th>符号</th><th>出处</th></tr></thead><tbody>' +
        ks.map(k => `<tr><td>${T[k][0]}</td><td>${T[k][1]}</td><td>${TC.symHtml(k)}</td><td>${TC.srcText(k)}</td></tr>`).join('') + '</tbody></table></div>';
    },
    // 标注对照表（纯文本行，DXF 用）：[中文, English, 符号]
    legendRows(keys) { return [...keys].filter(k => T[k] && T[k][3] !== '').map(k => [T[k][0], T[k][1], TC.symPlain(k) || '—']); },
    css: '.hint.tc{display:block!important;grid-column:1/-1;font-family:var(--f-ui,inherit)!important;text-align:left;white-space:normal}.hint.tc *{font-family:inherit}.hint.tc div{display:block!important;border:0!important;padding:1px 0!important;font-size:12.5px!important}.hint.tc span{font-family:inherit!important;font-size:11.5px!important;white-space:normal!important;color:var(--muted)!important}label.tc-lab{display:flex!important;align-items:center;min-width:0}label.tc-lab .tc-lt{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0}label.tc-lab .q{flex:none}.hint.tc .tc-l{margin:1px 0}.hint.tc .tc-src{color:var(--muted);font-size:11.5px}.hint.tc sub{font-size:75%}.hint.tc .tc-x{margin-top:4px}' +
      '.tc-sw{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin:4px 0 8px}.tc-swl{font-size:12px;color:var(--muted)}' +
      '.tc-q{display:inline-grid;place-items:center;width:17px;height:17px;margin-left:5px;border-radius:50%;border:1px solid var(--line);color:var(--muted);font-size:11px;line-height:1;cursor:pointer;background:transparent;font-family:var(--f-ui,inherit);vertical-align:1px;padding:0;flex:none}.tc-q[aria-expanded="true"]{border-color:var(--accent);color:var(--accent)}' +
      '.tc-leg{margin-top:10px;overflow-x:auto;font-family:var(--f-ui,inherit)}.tc-legt{font-size:12.5px;color:var(--muted);margin-bottom:4px}.tc-leg table{border-collapse:collapse;width:100%;font-size:12px}' +
      '.tc-leg th,.tc-leg td{font-family:var(--f-ui,inherit);white-space:normal;color:var(--ink);border:1px solid var(--line);padding:3px 6px;text-align:left;vertical-align:top}.tc-leg th{color:var(--muted);font-weight:500;white-space:nowrap}.tc-leg td:nth-child(3){white-space:nowrap}.tc-leg td:nth-child(4){color:var(--muted);font-size:11.5px}.tc-leg sub{font-size:75%}'
  };
  const st = document.createElement('style'); st.textContent = TC.css; (document.head || document.documentElement).appendChild(st);
  window.TC = TC;
})();
