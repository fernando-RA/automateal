export interface IBaseTemplateProps {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplateProps> = ({ sampleTextProp }) => {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-teal-700">
      {sampleTextProp}
    </div>
  );
};

export default BaseTemplate;
