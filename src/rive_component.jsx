import { useRive } from '@rive-app/react-canvas';
import Rive, {Fit} from '@rive-app/react-canvas';

export default function Simple({filename}) {
  const { rive, RiveComponent } = useRive({
    src: '/'+filename,
    stateMachines: "timeline_1",
    autoplay: true,
    fit: Fit.ScaleDown,
  });

  return (
    <RiveComponent
    />
  );
}
