interface HibauzenetProps {
  sulyos: number;
  hibauzenetek: string[];
}
export function Hibauzenet(props: HibauzenetProps) {
  if (props.sulyos == 0) {
    return <ul style={{ color: 'red' }}>{props.hibauzenetek.map(msg => <li>{msg}</li>)}
    </ul>;
  }
  if (props.sulyos == 1) {
    return <ul style={{ color: 'yellow' }}>{props.hibauzenetek.map(msg => <li>{msg}</li>)}
    </ul>;
  }
  if (props.sulyos == 2) {
    return <ul style={{ color: 'green' }}>{props.hibauzenetek.map(msg => <li>{msg}</li>)}
    </ul>;
  }
  else {
    return <p></p>;
  }
}
